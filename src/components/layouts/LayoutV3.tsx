import HeaderV3 from '../header/HeaderV3';
import FooterV1 from '../footer/FooterV1';

interface LayoutProps {
    children?: React.ReactNode;
    isDark?: boolean
}

const LayoutV3 = ({ children, isDark }: LayoutProps) => {
    return (
        <>
            <HeaderV3 isDark={isDark} />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV3;