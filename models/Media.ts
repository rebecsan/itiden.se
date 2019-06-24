interface File {
  url: string;
  details: {
    size: number;
    image: { width: number; height: number };
  };
  fileName: string;
  contentType: string;
}

export interface Media {
  title: string;
  file: File;
}
