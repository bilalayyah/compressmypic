/**
 * Shared result-export UI (export pilot).
 *
 * NOTE: exportEngine is intentionally NOT re-exported here — it must only
 * ever load via dynamic import() from ResultExportPanel, so html-to-image
 * and pdf-lib never enter the initial bundle.
 */
export { ResultExportPanel } from './ResultExportPanel';
export { ExportPreview } from './ExportPreview';
export { RecentResults } from './RecentResults';
export { PremiumPromo } from './PremiumPromo';
export type {
  ExportFormat,
  ExportPanelStrings,
  ExportTemplateId,
  RecentResultRecord,
} from './types';
