package com.excellent.accreditation.model.vo;

import com.excellent.accreditation.common.domain.Const;
import com.excellent.accreditation.model.entity.Student;
import com.excellent.accreditation.model.entity.Teacher;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * @ClassName UserVo
 * @Description TODO
 * @Author 安羽兮
 * @Date 2019/11/2516:12
 * @Version 1.0
 **/
@Data
public class UserVo {

    private static final long serialVersionUID = 1L;

    private Integer id;

    private String role;

    private String name;

    private String sex;

    /**
     * 正常-0
     */
    private Integer status;

    private LocalDateTime loginTime;

    private LocalDateTime updateTime;

    private LocalDateTime createTime;

    public static UserVo convert(Student student) {
        UserVo userVo = new UserVo();
        userVo.id = student.getId();
        userVo.role = Const.STUDENT;
        userVo.name = student.getName();
        userVo.sex = student.getSex();
        userVo.status = 0;
        userVo.updateTime = student.getUpdateTime();
        userVo.createTime = student.getCreateTime();
        return userVo;
    }

    public static UserVo convert(Teacher teacher) {
        UserVo userVo = new UserVo();
        userVo.id = teacher.getId();
        userVo.role = Const.TEACHER;
        userVo.name = teacher.getName();
        userVo.sex = teacher.getSex();
        userVo.status = 0;
        userVo.updateTime = teacher.getUpdateTime();
        userVo.createTime = teacher.getCreateTime();
        return userVo;
    }
}
