// material-ui
import { Theme, SxProps } from '@mui/material/styles';

// third-party
import { DropzoneOptions } from 'react-dropzone';

//project-imports
import { DropzopType } from 'config';

// ==============================|| TYPES - DROPZONE  ||============================== //

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export interface UploadProps extends DropzoneOptions {
  error?: boolean;
  file: CustomFile[] | null;
  setFieldValue: (field: string, value: any) => void;
  sx?: SxProps<Theme>;
}

export interface UploadMultiFileProps extends DropzoneOptions {
  files?: CustomFile[] | null;
  error?: boolean;
  showList?: boolean;
  type?: DropzopType;
  sx?: SxProps<Theme>;
  onUpload?: VoidFunction;
  onRemove?: (file: File | string) => void;
  onRemoveAll?: VoidFunction;
  setFieldValue: (field: string, value: any) => void;
}

export interface FilePreviewProps {
  showList?: boolean;
  type?: DropzopType;
  files: (File | string)[];
  onRemove?: (file: File | string) => void;
}
