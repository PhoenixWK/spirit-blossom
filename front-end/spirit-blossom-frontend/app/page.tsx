import ListOfImages from "@/components/list-of-images/ListOfImages";
import SidebarAndHeaderLayout from "@/components/SidebarAndHeaderLayout";

export default function Home() {
  return (
    <SidebarAndHeaderLayout>
      <div className="w-full h-full">
        <ListOfImages />
      </div>
    </SidebarAndHeaderLayout>
  );
}
