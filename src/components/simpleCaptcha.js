import React, { Component, useEffect } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate } from "react-simple-captcha";
import "./style.scss";
import TextBox from "./textBox";

function SimpleCaptcha({ handlehange, isFocused, error }) {
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  return (
    <div className="simple-captcha">
      <div className="form-group">
        <div className="col mt-3">
          <LoadCanvasTemplate reloadColor="#3D5CB8" />
        </div>

        <div className="col mt-3">
          <div>
            <TextBox
              placeholder="Enter Captcha Value"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
              className="text-input form-control"
              onChange={handlehange}
              error={error}
              touched={isFocused}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCaptcha;
