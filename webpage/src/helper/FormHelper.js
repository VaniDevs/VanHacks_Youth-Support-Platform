/**
 */
import React, { Component } from 'react';
export function renderTextField(field)  {
    var clazzName = (field.className || "");
    return (
        <span className={clazzName}>
            <input
                className="form-control"
                type={field.isPassword === 'true' ? "password" : "text"}
                placeholder={field.placeholder}
                {...field.input}
            />

        </span>
    );
}
export function renderTextArea(field) {
    var clazzName = (field.className || "");
    return (
        <span className={clazzName}>
            <textarea
                className="form-control"
                {...field.input}
            />
        </span>
    );
}