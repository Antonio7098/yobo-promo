import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useTheme } from "../context/ThemeContext";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const { theme, variation } = useTheme();
  const isDark = variation >= 4;

  const inputStyles: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "16px",
    borderRadius: theme.borderRadius,
    border: isDark
      ? "1px solid rgba(255,255,255,0.2)"
      : "1px solid #e5e7eb",
    background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
    color: theme.text,
    fontFamily: theme.fontFamily,
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    ...style,
  };

  return (
    <div style={{ marginBottom: "16px", width: "100%" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: 500,
            color: theme.text,
          }}
        >
          {label}
          {props.required && (
            <span style={{ color: "#ef4444", marginLeft: "4px" }}>*</span>
          )}
        </label>
      )}
      <input
        style={inputStyles}
        onFocus={(e) => {
          e.target.style.borderColor = theme.primary;
          e.target.style.boxShadow = `0 0 0 3px ${theme.primary}22`;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = isDark
            ? "rgba(255,255,255,0.2)"
            : "#e5e7eb";
          e.target.style.boxShadow = "none";
        }}
        {...props}
      />
      {error && (
        <span
          style={{ fontSize: "14px", color: "#ef4444", marginTop: "4px" }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

export function TextArea({ label, error, style, ...props }: TextAreaProps) {
  const { theme, variation } = useTheme();
  const isDark = variation >= 4;

  const textareaStyles: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "16px",
    borderRadius: theme.borderRadius,
    border: isDark
      ? "1px solid rgba(255,255,255,0.2)"
      : "1px solid #e5e7eb",
    background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
    color: theme.text,
    fontFamily: theme.fontFamily,
    outline: "none",
    transition: "all 0.2s ease",
    resize: "vertical",
    minHeight: "120px",
    boxSizing: "border-box",
    ...style,
  };

  return (
    <div style={{ marginBottom: "16px", width: "100%" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontSize: "14px",
            fontWeight: 500,
            color: theme.text,
          }}
        >
          {label}
          {props.required && (
            <span style={{ color: "#ef4444", marginLeft: "4px" }}>*</span>
          )}
        </label>
      )}
      <textarea
        style={textareaStyles}
        onFocus={(e) => {
          e.target.style.borderColor = theme.primary;
          e.target.style.boxShadow = `0 0 0 3px ${theme.primary}22`;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = isDark
            ? "rgba(255,255,255,0.2)"
            : "#e5e7eb";
          e.target.style.boxShadow = "none";
        }}
        {...props}
      />
      {error && (
        <span
          style={{ fontSize: "14px", color: "#ef4444", marginTop: "4px" }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
