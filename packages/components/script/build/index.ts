import { src, dest } from 'gulp'
import { componentPath } from '../utils/paths'
const sass = require('gulp-sass')(require('sass'));
import autoprefixer from 'gulp-autoprefixer'
import delpath from "../utils/delpath"
import run from "../utils/run"
const cssmin = require('gulp-cssmin');

//删除dist
export const removeDist = () => {
    return delpath(`${componentPath}/imm-ui`)
}

//处理样式
export const buildStyle = () => {
    return src(`${componentPath}/src/theme-chalk/**/*.scss`)
        .pipe(sass())
        .pipe(
            autoprefixer()
        )
        .pipe(cssmin())
        .pipe(dest(`${componentPath}/imm-ui/lib/src/theme-chalk`))
        .pipe(dest(`${componentPath}/imm-ui/es/src/theme-chalk`));
};

//打包组件
export const buildComponent = async () => {
    run('pnpm run build', componentPath)
}
