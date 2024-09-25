import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your/credentials.json', // You'll need to set this up
  scopes: ['https://www.googleapis.com/auth/documents.readonly'],
});

export async function getDocumentContent(docId) {
  const docs = google.docs({ version: 'v1', auth });
  
  try {
    const response = await docs.documents.get({ documentId: docId });
    const content = response.data.body.content
      .filter(item => item.paragraph)
      .map(item => item.paragraph.elements.map(element => element.textRun.content).join(''))
      .join('\n');
    
    return content;
  } catch (error) {
    console.error('Error fetching document content:', error);
    throw error;
  }
}