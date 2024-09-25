// This is a mock function to simulate fetching document content
export async function getDocumentContent(docId) {
  // Simulate an API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock content based on the docId
  return `This is mock content for document ${docId}.\n\nIt simulates the content that would be retrieved from a Google Doc.\n\nYou can replace this with actual API integration in a backend service.`;
}

export function extractDocId(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
}
