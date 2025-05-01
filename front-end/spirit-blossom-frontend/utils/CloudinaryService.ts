

export async function getImages(): Promise<Array<CloudinaryImage> | undefined> {
    try {
        const response = await fetch("http://localhost:8080/api/images/all?folderpath=spirit-blossom&max_results=10");
        
        return response.json();
    } catch (error: unknown) {
        console.error("Error fetching images:", error);
        return undefined;
    }
}


