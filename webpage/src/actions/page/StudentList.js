/**
 */

// export const STUDENT_LIST_GROUP_RESET = 'page_student_list_group_reset';

export const STUDENT_LIST_CHANGE_GROUP = 'page_student_list_change_group';

export const GROUP_STUDENT_LIST_RESET = 'page_group_student_list_reset';

export const STUDENT_LIST_GROUP_ALL = 'all';


export function studentListChangeGroup(groupId) {
    return {
        type : STUDENT_LIST_CHANGE_GROUP,
        payload : groupId
    };
}


export function groupStudentListReset() {
    return {
        type : GROUP_STUDENT_LIST_RESET
    };
}