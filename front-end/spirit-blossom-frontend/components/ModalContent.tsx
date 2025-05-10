export default function ModalContent({children, classname}: {children: React.ReactNode, classname: string | undefined}) {
    return (
        <div className="relative">
            <div className={classname}>
                {children}
            </div>
        </div>
    );
}
