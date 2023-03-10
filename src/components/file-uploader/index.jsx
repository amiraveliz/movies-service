import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../button';
import Input from '../input';
import {
  StyledContainer,
  StyledDrandAndDropZone,
  StyledDragAndDropDetails,
  StyledSubmitButton,
  StyledSuccessTitle,
  StyledSuccessSubtitle,
} from './styles';
import { ReactComponent as Clip } from '../../assets/images/icons/clip.svg';
import ProgressBar from '../progress-bar';

function FileUploader({
  currentFile,
  progress,
  fileName,
  onSubmit,
  onDrop,
  onChangeFileName,
  onCancel,
}) {
  const uploadError = useSelector((state) => state.movies.uploadError);
  const [showSuccess, setShowSuccess] = useState(false);

  const inProgress = progress >= 0;

  useEffect(() => {
    let successTimer;
    if (progress === 100) {
      successTimer = setTimeout(() => setShowSuccess(true), 2000);
    }

    return () => {
      clearTimeout(successTimer);
    };
  }, [progress]);

  let uploadContent;
  if (showSuccess) {
    uploadContent = (
      <StyledContainer>
        <StyledSuccessTitle>¬°Felicitaciones!</StyledSuccessTitle>
        <StyledSuccessSubtitle>
          {fileName} fue correctamente subida.
        </StyledSuccessSubtitle>
        <Button text="ir a home" variant="secondary" onClick={onCancel} />
      </StyledContainer>
    );
  } else {
    uploadContent = (
      <div>
        {inProgress && !uploadError && (
          <ProgressBar width={602} value={progress} max={100} type="success" />
        )}
        {uploadError && (
          <ProgressBar
            width={602}
            value={100}
            max={100}
            type="failure"
            onRetry={onSubmit}
          />
        )}
        <Dropzone onDrop={onDrop} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <StyledContainer>
              {!inProgress && !uploadError && (
                <StyledDrandAndDropZone
                  {...getRootProps({ className: 'dropzone' })}
                >
                  <input {...getInputProps()} />
                  {currentFile?.name ? (
                    <div>{currentFile.name}</div>
                  ) : (
                    <StyledDragAndDropDetails>
                      <Clip />
                      &nbsp; Agreg√° un archivo o arrastralo y soltalo aqu√≠
                    </StyledDragAndDropDetails>
                  )}
                </StyledDrandAndDropZone>
              )}

              <Input
                placeholder="T√ćTULO"
                onChange={onChangeFileName}
                value={fileName}
                disabled={inProgress || uploadError}
              />
              <StyledSubmitButton>
                <Button
                  text="subir pel√≠cula"
                  variant="secondary"
                  disabled={!currentFile || !fileName || inProgress}
                  onClick={onSubmit}
                />
              </StyledSubmitButton>
            </StyledContainer>
          )}
        </Dropzone>
      </div>
    );
  }

  return <div>{uploadContent}</div>;
}

FileUploader.propTypes = {
  currentFile: PropTypes.object,
  progress: PropTypes.number,
  fileName: PropTypes.string,
  onSubmit: PropTypes.func,
  onDrop: PropTypes.func,
  onChangeFileName: PropTypes.func,
  onCancel: PropTypes.func,
  uploadError: PropTypes.bool,
};

FileUploader.defaultProps = {
  currentFile: undefined,
  progress: undefined,
  fileName: '',
  onSubmit: () => {},
  onDrop: () => {},
  onChangeFileName: () => {},
  onCancel: () => {},
  uploadError: false,
};

export default FileUploader;
