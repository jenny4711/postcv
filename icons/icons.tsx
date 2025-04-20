import { SVGProps } from 'react';

// Plus Icon from provided SVG
export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.75 1C7.47386 1 7.25 1.22386 7.25 1.5V7.25H1.5C1.22386 7.25 1 7.47386 1 7.75V8.25C1 8.52614 1.22386 8.75 1.5 8.75H7.25V14.5C7.25 14.7761 7.47386 15 7.75 15H8.25C8.52614 15 8.75 14.7761 8.75 14.5V8.75H14.5C14.7761 8.75 15 8.52614 15 8.25V7.75C15 7.47386 14.7761 7.25 14.5 7.25H8.75V1.5C8.75 1.22386 8.52614 1 8.25 1H7.75Z" fill="currentColor" />
  </svg>
);

// New Icon from provided SVG path
export const PaperPlaneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.26 15.006l-3.87-1.037a2 2 0 01-1.415-2.45l2.459-9.176A2 2 0 015.884.929l7.727 2.07a2 2 0 011.414 2.45l-1.425 5.32a4 4 0 01-1.864 2.428l-2.44 1.41a4 4 0 01-3.036.399zm4.976-2.675c.393-.227.726-.538.977-.906l-2.734-.733a1 1 0 00-1.225.707l-.733 2.735a3 3 0 001.274-.394l2.44-1.409zm-8.588.672l3.864 1.035.776-2.898a2 2 0 012.45-1.414l2.898.776 1.423-5.312a1 1 0 00-.707-1.225l-7.727-2.07a1 1 0 00-1.225.707L1.94 11.778a1 1 0 00.707 1.225z" fill="currentColor" />
  </svg>
);

// Comment Icon
export const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M3.875 10.5A6.125 6.125 0 0110 4.375h4a6.125 6.125 0 013.6 11.08l-5.939 4.315a.625.625 0 01-.978-.638l.542-2.507H10A6.125 6.125 0 013.875 10.5zm14.07-2.866A4.868 4.868 0 0014 5.625h-4a4.875 4.875 0 100 9.75h1.69c.558 0 .973.515.855 1.06l-.294 1.362 4.615-3.353a4.875 4.875 0 001.078-6.81z" 
      fill="currentColor" 
    />
  </svg>
);

// Retweet Icon
export const RetweetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
      d="M12 5.625a6.352 6.352 0 00-4.462 1.821.625.625 0 01-.874-.892A7.626 7.626 0 0119.56 11H21a.5.5 0 01.4.8l-2 2.667a.5.5 0 01-.8 0l-2-2.667a.5.5 0 01.4-.8h1.297A6.377 6.377 0 0012 5.625zM3 13h1.44a7.627 7.627 0 0012.896 4.446.625.625 0 10-.874-.892A6.377 6.377 0 015.703 13H7a.5.5 0 00.4-.8l-2-2.667a.5.5 0 00-.8 0l-2 2.667a.5.5 0 00.4.8z" 
      fill="currentColor" 
    />
  </svg>
);

// Like Icon
export const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M11.358 19.073L12 18l.642 1.073a1.25 1.25 0 01-1.284 0zM12 18s6.75-4.04 6.75-8.25C18.75 7.625 17.125 6 15 6c-1.145 0-2.126.656-2.756 1.591a.3.3 0 01-.488 0C11.126 6.656 10.145 6 9 6 6.875 6 5.25 7.625 5.25 9.75 5.25 13.96 12 18 12 18zm0-12.035c-.781-.722-1.807-1.215-3-1.215-2.815 0-5 2.185-5 5 0 1.383.55 2.663 1.258 3.747.71 1.091 1.637 2.072 2.525 2.88a25.19 25.19 0 003.548 2.679l.018.011.006.004.003.002L12 18l.642 1.073.003-.002.006-.004.018-.011.065-.04a24.1 24.1 0 001.04-.69 25.192 25.192 0 002.443-1.948c.888-.81 1.814-1.79 2.526-2.88C19.448 12.412 20 11.132 20 9.75c0-2.815-2.185-5-5-5-1.193 0-2.219.493-3 1.215z" 
      fill="currentColor" 
    />
  </svg>
);

// More Icon (Three Dots)
export const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="6" cy="12" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
  </svg>
); 