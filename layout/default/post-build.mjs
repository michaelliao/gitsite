import { execSync } from 'child_process';

function run(cmd) {
    console.log(`run: ${cmd}`);
    execSync(cmd);
}

export default async function (config, output) {
    console.log(`post-build: cwd = ${process.cwd()}, output = ${output}`);
    run(`cp static/* ${output}/`);
    run(`npx tailwindcss -i custom-tailwind.css ../../README.md ../../404.md -o ${output}/static/custom-tailwind.css`);
};