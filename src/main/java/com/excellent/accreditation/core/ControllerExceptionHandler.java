package com.excellent.accreditation.core;

import com.excellent.accreditation.common.domain.ServerResponse;
import com.excellent.accreditation.common.exception.ConfictException;
import com.excellent.accreditation.common.exception.UniqueException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @Author evildoer
 * @Description Exception handler of controller
 * @Date 21:36 2019/11/14
 */
@Slf4j
@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ConfictException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ServerResponse handleUniqueException(ConfictException e) {
        return ServerResponse.createByErrorMessage(e.getMessage());
    }

    @ExceptionHandler(UniqueException.class)
    @ResponseStatus(HttpStatus.OK)
    public ServerResponse handleUniqueException(UniqueException e) {
        return ServerResponse.createByErrorMessage(e.getMessage());
    }

//    @ExceptionHandler(Exception.class)
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    public ServerResponse handleGlobalException(Exception e) {
//        System.out.println(e.getMessage());
//        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
//        return ServerResponse.createByErrorCodeMessage(status.value(), e.getMessage());
//    }

    private <T> ServerResponse<T> handleBaseException(Throwable t) {
        Assert.notNull(t, "Throwable must not be null");
        log.error("Captured an exception", t);
        return ServerResponse.createByErrorMessage(t.getMessage());
    }
}

