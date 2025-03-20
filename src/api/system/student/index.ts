import request from '@/config/axios'

// 学生课程 VO
export interface StudentCourseVO {
  id: number // 编号
  studentId: number // 学生编号
  name: string // 名字
  score: number // 分数
}

// 学生课程 API
export const StudentCourseApi = {
  // 查询学生课程分页
  getStudentCoursePage: async (params: any) => {
    return await request.get({ url: `/system//page`, params })
  },

  // 查询学生课程详情
  getStudentCourse: async (id: number) => {
    return await request.get({ url: `/system/student-course/get?id=` + id })
  },

  // 新增学生课程
  createStudentCourse: async (data: StudentCourseVO) => {
    return await request.post({ url: `/system/student-course/create`, data })
  },

  // 修改学生课程
  updateStudentCourse: async (data: StudentCourseVO) => {
    return await request.put({ url: `/system/student-course/update`, data })
  },

  // 删除学生课程
  deleteStudentCourse: async (id: number) => {
    return await request.delete({ url: `/system/student-course/delete?id=` + id })
  },

  // 导出学生课程 Excel
  exportStudentCourse: async (params) => {
    return await request.download({ url: `/system/student-course/export-excel`, params })
  }
}