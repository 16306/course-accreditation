package com.excellent.accreditation.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.excellent.accreditation.common.domain.ExcelResult;
import com.excellent.accreditation.model.entity.Student;
import com.excellent.accreditation.model.form.StudentQuery;
import com.excellent.accreditation.model.vo.StudentVo;
import com.github.pagehelper.PageInfo;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @Author evildoer
 */
public interface IStudentService extends IService<Student> {

    void checkStudent(Integer studentId);

    StudentVo  getStudentInfo(Integer studentId);

    Student getByCode(String code);

    void checkCode(String sno);

    PageInfo<StudentVo> pageByQuery(StudentQuery studentQuery);

    boolean create(Student student);

    List<ExcelResult> saveBachByExcel(MultipartFile file);

    boolean updatePassword(String code, String oldPassword, String newPassword);

    PageInfo<StudentVo> getStudentByCourseClassId(StudentQuery studentQuery);
}
