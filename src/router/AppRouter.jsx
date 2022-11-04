import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
