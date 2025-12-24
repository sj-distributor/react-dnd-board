export const getPriorityLabel = (priority) => {
    const labels = {
        high: "高优先级",
        medium: "中优先级",
        low: "低优先级",
    };
    return labels[priority];
};
export const getPriorityColor = (priority) => {
    const colors = {
        high: "rdb:bg-red-100 rdb:text-red-700",
        medium: "rdb:bg-yellow-100 rdb:text-yellow-700",
        low: "rdb:bg-green-100 rdb:text-green-700",
    };
    return colors[priority];
};
