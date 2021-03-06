package com.excellent.accreditation.controller;


import com.excellent.accreditation.common.annotation.Permission;
import com.excellent.accreditation.common.domain.ServerResponse;
import com.excellent.accreditation.manage.UserManage;
import com.excellent.accreditation.model.entity.Student;
import com.excellent.accreditation.model.form.StudentQuery;
import com.excellent.accreditation.model.vo.StudentVo;
import com.excellent.accreditation.model.vo.UserVo;
import com.excellent.accreditation.service.IMajorService;
import com.excellent.accreditation.service.IStudentService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Collection;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author ashe
 * @since 2019-11-14
 */
@RestController
@RequestMapping("/${server.version}/student")
public class StudentController {

    private final UserManage userManage;

    private final IStudentService studentService;


    @Autowired
    public StudentController(UserManage userManage, IStudentService studentService) {
        this.userManage = userManage;
        this.studentService = studentService;
    }

    /**
     * @Author 安羽兮
     * @Description //TODO
     * @Date 17:02 2020/3/26
     * @Param []
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @GetMapping("/info")
    @ApiOperation("获取学生个人信息")
    @Permission
    public ServerResponse getStudentInfo() {
        UserVo userVo = userManage.getUserInfo();
        return ServerResponse.createBySuccess(studentService.getStudentInfo(userVo.getId()  ));
    }

    /**
     * @Author 安羽兮
     * @Description //TODO
     * @Date 17:02 2020/3/26
     * @Param [student]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @PostMapping("/updateInfo")
    @ApiOperation("更新学生个人信息")
    @Permission
    public ServerResponse updateStudentInfo(@RequestBody @NonNull Student student) {
        UserVo userVo = userManage.getUserInfo();
        student.setId(userVo.getId());
        studentService.saveOrUpdate(student);
        return ServerResponse.createBySuccessMessage("信息更新成功");
    }

    /**
     * @Author 安羽兮
     * @Description 添加学生
     * @Date 10:19 2019/11/15
     * @Param [student]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @PostMapping
    @ApiOperation("添加学生")
    @Permission
    public ServerResponse create(@RequestBody @NonNull Student student) {
        studentService.create(student);
        return ServerResponse.createBySuccessMessage("学生添加成功");
    }

    /**
     * @Author 安羽兮
     * @Description 通过id删除学生
     * @Date 10:18 2019/11/15
     * @Param [id]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @DeleteMapping("/{id:\\d+}")
    @ApiOperation("通过id删除学生")
    @Permission
    public ServerResponse deleteById(@PathVariable("id") Integer id) {
        boolean result = studentService.removeById(id);
        if (result)
            return ServerResponse.createBySuccessMessage("学生删除成功");

        return ServerResponse.createByErrorMessage("学生删除失败");
    }

    /**
     * @Author 安羽兮
     * @Description 通过id列表批量删除学生
     * @Date 9:05 2019/12/4
     * @Param [ids]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @DeleteMapping("/deleteByIds")
    @ApiOperation("通过id列表批量删除学生")
    @Permission
    public ServerResponse deleteByIds(@RequestBody @NonNull Collection<Integer> ids) {
        boolean result = studentService.removeByIds(ids);
        if (result)
            return ServerResponse.createBySuccessMessage("学生批量删除成功");

        return ServerResponse.createByErrorMessage("学生批量删除失败");
    }

    /**
     * @Author 安羽兮
     * @Description 通过id更新学生
     * @Date 9:05 2019/12/4
     * @Param [id, student]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @PutMapping("/{id:\\d+}")
    @ApiOperation("通过id更新学生")
    @Permission
    public ServerResponse updateById(@PathVariable("id") Integer id,
                                     @RequestBody Student student) {
        student.setId(id);
        student.setUpdateTime(LocalDateTime.now());
        boolean result = studentService.updateById(student);
        if (result)
            return ServerResponse.createBySuccessMessage("学生更新成功");

        return ServerResponse.createByErrorMessage("学生更新失败");
    }

    /**
     * @Author 安羽兮
     * @Description 通过id查找学生
     * @Date 9:05 2019/12/4
     * @Param [id]
     * @Return com.excellent.accreditation.common.domain.ServerResponse<com.excellent.accreditation.model.entity.Student>
     **/
    @GetMapping
    @ApiOperation("通过id查找学生")
    @Permission
    public ServerResponse<Student> query(Integer id) {
        Student student = studentService.getById(id);
        if (student != null)
            return ServerResponse.createBySuccess(student);

        return ServerResponse.createByErrorMessage("学生不存在");
    }

    /**
     * @Author 安羽兮
     * @Description 分页查询学生
     * @Date 9:05 2019/12/4
     * @Param [studentQuery]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @GetMapping("/list")
    @ApiOperation("分页查询学生")
    @Permission
    public ServerResponse queryStudent(StudentQuery studentQuery) {
        PageInfo<StudentVo> list = studentService.pageByQuery(studentQuery);
        if (list != null)
            return ServerResponse.createBySuccess(list);

        return ServerResponse.createByErrorMessage("学生不存在");
    }

    /**
     * @Author ashe
     * @Description 通过开课班级Id查询学生
     * @Date 9:05 2019/12/4
     * @Param [studentQuery]
     * @Return com.excellent.accreditation.common.domain.ServerResponse
     **/
    @GetMapping("/getStudentByClass")
    @ApiOperation("通过开课班级Id查询学生")
    @Permission
    public ServerResponse queryStudentByCourseClassId(StudentQuery studentQuery) {
        PageInfo<StudentVo> list = studentService.getStudentByCourseClassId(studentQuery);
        return ServerResponse.createBySuccess(list);
    }

    @PostMapping("/batchSave")
    @ApiOperation("批量添加学生")
    @Permission
    public ServerResponse batchSave(MultipartFile file) {
        return ServerResponse.createBySuccess(studentService.saveBachByExcel(file));
    }
}
