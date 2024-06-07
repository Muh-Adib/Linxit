<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            //  Ambil token dari header Authorization
            $token = $request->bearerToken();

            //  Jika tidak ada token, kembalikan error
            if (!$token) {
                return response()->json(['error' => 'Token not provided.'], 401);
            }

            //  Autentikasi user dengan token
            $user = JWTAuth::parseToken()->authenticate();
        } catch (TokenExpiredException $e) {
            return response()->json(['error' => 'Token expired.'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['error' => 'Token invalid.'], 401);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Token absent.'], 400);
        }

        //  Set user yang terautentikasi ke request
        $request->setUserResolver(function () use ($user) {
            return $user;
        });

        return $next($request);
    }
}
