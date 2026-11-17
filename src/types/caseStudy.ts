export interface CaseStudyScreenshot {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly asset?: string;
  readonly withheldReason?: string;
}
