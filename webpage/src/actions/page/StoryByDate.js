/**
 */

export const STORY_BY_DATE_RESET_DATE = 'story_by_date_reset_date';
export const STORY_BY_DATE_SET_DATE = 'story_by_date_set_date';
export const STORY_BY_DATE_UPDATE_LOCAL_TOP = 'story_by_date_update_local_top';

export function storyByDateResetDate() {
    return {
        type : STORY_BY_DATE_RESET_DATE
    };
}

export function storyByDateSetDate(date) {
    return {
        type : STORY_BY_DATE_SET_DATE,
        payload : date
    };
}

export function storyByDateUpdateLocalTop(storyRef, top) {
    return {
        type : STORY_BY_DATE_UPDATE_LOCAL_TOP,
        payload : {
            storyRef,
            top
        }
    };
}