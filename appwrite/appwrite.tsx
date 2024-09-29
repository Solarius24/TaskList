import { Client, Databases, ID } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f063e800132539b22c");

export const databases = new Databases(client);

export async function addTask(content: string, title: string): Promise<Task> {
  const newTask = { content: content, title: title };

  const response = await databases.createDocument(
    "66f0660500145eddc603",
    "66f0661200128b531dae",
    ID.unique(),
    newTask
  );

  const task: Task = {
    $id: response.$id,
    $createdAt: response.$createdAt,
    title: response.title,
    content: response.content,
  };

  return task;
}

export async function getTasks(): Promise<Task[]> {
  const response = await databases.listDocuments(
    "66f0660500145eddc603",
    "66f0661200128b531dae"
  );
  const tasks: Task[] = response.documents.map((doc) => ({
    $id: doc.$id,
    content: doc.content,
    title: doc.title,
    $createdAt: doc.$createdAt,
  }));

  return tasks;
}

// export async function deleteNote(noteId: string) {
//   await databases.deleteDocument(
//     '66f0660500145eddc603',
//     '66f0661200128b531dae',
//     noteId
//   )
// }
