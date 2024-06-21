import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

export const jwtAuthIntc: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authSvc = inject(AuthService);
  const token = inject(AuthService).token
  console.log(token)
  if (!token) return next(req)

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }
  )
  return next(req)
}
