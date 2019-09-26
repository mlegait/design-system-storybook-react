/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { action } from '@storybook/addon-actions';
import { settings } from 'carbon-components';
import React from 'react';
import Button from '../../components/Button';
import FileUploader, {
  FileUploaderButton,
  FileUploaderDropContainer,
  FileUploaderItem,
} from '../../components/FileUploader';

const { prefix } = settings;

const props = {
  fileUploaderButton: () => {
    const buttonKind = '';
    return {
      className: 'bob',
      labelText: 'Add files',
      name: '',
      multiple: true,
      disabled: false,
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: false,
      role: 'button',
      tabIndex: 0,
      onChange: action('onChange'),
    };
  },
  fileUploader: () => ({
    labelTitle: 'Upload',
    labelDescription: 'only .jpg files at 500mb or less',
    buttonLabel: 'Add files',
    filenameStatus: 'edit',
    accept: ['.jpg', '.png'],
    name: '',
    multiple: true,
  }),
  fileUploaderItem: () => ({
    name: 'README.md',
    status: 'edit',
    iconDescription: 'Icon description',
    onDelete: action('onDelete'),
    invalid: false,
    errorSubject: 'File size exceeds limit',
    errorBody: '500kb max file size. Select a new file and try again.',
  }),
  fileUploaderDropContainer: () => ({
    labelText: 'Drag and drop files here or click to upload',
    name: '',
    multiple: true,
    accept: ['image/jpeg', 'image/png'],
    disabled: false,
    role: '',
    tabIndex: 0,
    onChange: action('onChange'),
  }),
};

export default {
  title: 'Components/FileUploader (DocsPage)',
  component: FileUploader,
};

export const fileUploaderButton = () => (
  <FileUploaderButton {...props.fileUploaderButton()} />
);
fileUploaderButton.story = {
  name: 'FileUploaderButton',
  parameters: {
    docs: {
      storyDescription: `
The FileUploaderButton can be used as a standalone component if you do not need the extra UI that comes with FileUploader. The FileUploaderButton is used in FileUploader.
  `,
    },
  },
};

export const fileUploader = () => {
  let fileUploader;
  return (
    <div className={`${prefix}--file__container`}>
      <FileUploader
        {...props.fileUploader()}
        ref={node => (fileUploader = node)}
      />
      <Button
        kind="secondary"
        small
        style={{ marginTop: '1rem' }}
        onClick={() => {
          fileUploader.clearFiles();
        }}
      >
        Clear File
      </Button>
    </div>
  );
};
fileUploader.story = {
  name: 'FileUploader',
  parameters: {
    docs: {
      storyDescription: `
The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading').
        `,
    },
  },
};

export const fileUploaderItem = () => (
  <FileUploaderItem {...props.fileUploaderItem()} />
);
fileUploaderItem.story = {
  name: 'fileUploaderItem',
  parameters: {
    docs: {
      storyDescription: `
<FileUploaderItem /> represents an item that has been uploaded to the file uploader component. Use the \`status\` prop to control which icon appears ('edit', 'complete', or 'uploading').
      `,
    },
  },
};

export const fileUploaderDropContainer = () => (
  <FileUploaderDropContainer {...props.fileUploaderDropContainer()} />
);
fileUploaderDropContainer.story = {
  name: 'FileUploaderDropContainer',
  parameters: {
    docs: {
      storyDescription:
        '<FileUploaderDropContainer /> is a drag and drop file uploader which allows users to upload files via both the normal file selection dialog and by dragging and dropping files.',
    },
  },
};

export const dragAndDrop = () =>
  require('../../components/FileUploader/stories/drop-container').default(
    props.fileUploaderDropContainer()
  );
dragAndDrop.story = {
  name: 'Drag and drop upload container example application',
  parameters: {
    docs: {
      storyDescription: 'Example application with drag and drop file uploader',
    },
  },
};

// export const skeleton = () => (
//   <div style={{ width: '500px' }}>
//     <FileUploaderSkeleton />
//   </div>
// );
// skeleton.story = {
//   parameters: {
//     docs: {
//       storyDescription:
//         'Placeholder skeleton state to use when content is loading.',
//     },
//   },
// };
