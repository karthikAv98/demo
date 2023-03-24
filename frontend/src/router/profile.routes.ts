import { Layout, TaskView, Project } from "@/views/profile"

export default {
    path: "/profile",
    component: Layout,
    children: [
        { path: "task", component: TaskView },
        { path: "project", component: Project }
    ]
}