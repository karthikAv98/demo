import { defineStore } from "pinia"
import type { TaskType } from "@/type"

export const useTaskStore = defineStore("task", {
    state: () => ({
        task_list: [] as TaskType[]
    }),
    actions: {
        fetchTaskList() {
            this.task_list = [
                {
                  id: "1",
                  created_date: "2023-01-01",
                  due_date: "2023-02-01",
                  task: "Something",
                },
                {
                  id: "2",
                  created_date: "2023-03-01",
                  due_date: "2023-02-04",
                  task: "Nothing"
                },
                {
                  id: "3",
                  created_date: "2023-05-01",
                  due_date: "2023-02-07",
                  task: "Else"
                }
            ]
        }
    }
})