import { useParams } from 'next/navigation';
import { use, useMemo } from 'react';

const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return '';
    }
    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => {
    return !!conversationId; // If conversationId is not empty, isOpen is true
  }, [conversationId]);

  return useMemo(() => {
    return {
      conversationId,
      isOpen,
    };
  }, [conversationId, isOpen]);
};

export default useConversation;
