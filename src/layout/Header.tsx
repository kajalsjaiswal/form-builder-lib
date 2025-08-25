import type { ReactNode } from "react";
import { HeaderTitle, Layout } from "../styles/Common/Common"

type HeaderProps = {
    children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
    return (
        <Layout className="d-flex justify-content-between align-items-center p-3">
            <HeaderTitle>
                <h4> Form Builder </h4>
            </HeaderTitle>
            <div>
                {children}
            </div>
        </Layout>
    )
}

export default Header