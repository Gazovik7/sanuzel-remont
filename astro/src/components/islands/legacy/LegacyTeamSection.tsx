import React from 'react';
import { TeamSection } from '../../../legacy/components/ContentSections';
import type { TeamBlockConfig } from '../../../data/services';
import type { TeamMember } from '../../../legacy/types';

export default function LegacyTeamSection({ content, members }: { content: TeamBlockConfig; members: TeamMember[] }) {
  return (
    <TeamSection
      onAction={() => {
        window.lead?.open('callback');
      }}
      content={content}
      members={members}
    />
  );
}
