import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';

const CAL_NAMESPACE = 'encrypted-discovery-call';
const CAL_LINK = 'ironfarmer/encrypted-discovery-call';

interface ConsultationButtonProps {
  className?: string;
}

export function ConsultationButton({ className }: ConsultationButtonProps) {
  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (!active) return;
      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      Request an Encrypted Consultation <ArrowRight className="w-4 h-4" />
    </button>
  );
}
