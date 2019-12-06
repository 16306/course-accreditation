package com.excellent.accreditation.model.form;

import com.excellent.accreditation.model.base.BasePage;
import lombok.Data;

import javax.validation.constraints.Size;

/**
 * @program: course-accreditation
 * @description: 课程对应班级查询的表单类
 * @author: ashe
 * @create: 2019-12-06 10:23
 */
@Data
public class CourseClassQuery extends BasePage {

    @Size(max = 25, message = "编号的字符长度不能超过 {max}")
    private String no;


}