'use client'

import SidebarAndHeaderLayout from "@/components/SidebarAndHeaderLayout";
import UserProfileSection from "@/components/user-profile-components/UserProfileSection";
import { useParams } from "next/navigation";

export default function UserProfilePage() {

    const params = useParams();
    console.log(params);

    return (
        <SidebarAndHeaderLayout>
            <UserProfileSection />
        </SidebarAndHeaderLayout>
    )
}
