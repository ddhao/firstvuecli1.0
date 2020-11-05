// 封装 路由路径
const _import: Function = function (file: string) {
  return () => import('@/views/' + file + '.vue')
}

export default _import
