import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getDocumentContent, extractDocId } from '../utils/googleDocsApi';

const UrlSubmissionForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const docId = extractDocId(url);
      if (!docId) {
        throw new Error('Invalid Google Docs URL');
      }
      const content = await getDocumentContent(docId);
      onSubmit(content);
    } catch (error) {
      console.error('Error processing document:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Google Docs URL"
        required
        className="w-full"
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Generate Slides'}
      </Button>
    </form>
  );
};

export default UrlSubmissionForm;
