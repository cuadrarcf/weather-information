import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export function AppFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Weather App ©2020 Created by <a href="https://www.linkedin.com/in/roberley">Roberley Cuadra.</a>
        </Footer>
    )
}
