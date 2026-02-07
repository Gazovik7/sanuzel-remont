import React from 'react';
import { PortfolioPage } from '../../../legacy/components/PortfolioPage';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface Props {
  breadcrumbItems?: BreadcrumbItem[];
}

export default function LegacyPortfolioPage({ breadcrumbItems }: Props) {
  return <PortfolioPage breadcrumbItems={breadcrumbItems} />;
}

