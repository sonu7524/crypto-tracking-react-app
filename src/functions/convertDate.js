export const convertDate = (num) => {
    const date = new Date(num);

    return date.getDate() + "/" + (date.getMonth() + 1);
};