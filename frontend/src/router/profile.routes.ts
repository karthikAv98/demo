import { Layout, Task, Project } from "@/views/profile"

export default {
    path: "/profile",
    component: Layout,
    children: [
        { path: "task", component: Task },
        { path: "project", component: Project }
    ]
}