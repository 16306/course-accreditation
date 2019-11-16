package com.excellent.accreditation.config;

import com.excellent.accreditation.common.annotation.Permission;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class PermissionAspect {
    /**
    * @Description: 角色权限验证
    * @Param: [join, permission]
    * @return: boolean
    * @Author: ashe
    * @Date: 2019/11/15
    */

    @Pointcut("execution(public * com.excellent.accreditation.controller.*.*(..)) within(com.excellent.accreditation.controller.*)")
    private void point() {
    }//切入点签名


    @Before(value = "point()&&@annotation(permission)")
    public void rolePermission(JoinPoint joinPoint,Permission permission){
        String role ="";
        String[] roles =permission.roles();
        for (int i = 0; i <roles.length ; i++) {

        }
       throw new RuntimeException("权限不足");
    }

}
