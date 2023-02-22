import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Button from '../button';
import Input from '../input';
import {
  StyledContainer,
  StyledDrandAndDropZone,
  StyledDragAndDropDetails,
  StyledSubmitButton,
} from './styles';
import { ReactComponent as Clip } from '../../assets/images/icons/clip.svg';

function FileUploader({ currentFile, progress, onSubmit, onDrop }) {
  return (
    <div>
      {progress >= 0 && (
        <div>
          <div style={{ width: `${progress}%` }}>{progress}%</div>
        </div>
      )}

      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <StyledContainer>
            <StyledDrandAndDropZone
              {...getRootProps({ className: 'dropzone' })}
            >
              <input {...getInputProps()} />
              {currentFile && currentFile.name ? (
                <div>{currentFile && currentFile.name}</div>
              ) : (
                <StyledDragAndDropDetails>
                  <Clip />
                  &nbsp; Agregá un archivo o arrastralo y soltalo aquí
                </StyledDragAndDropDetails>
              )}
            </StyledDrandAndDropZone>
            <Input placeholder="TÍTULO" />
            <StyledSubmitButton>
              <Button
                text="Upload"
                variant="secondary"
                disabled={!currentFile}
                onClick={onSubmit}
              />
            </StyledSubmitButton>
          </StyledContainer>
        )}
      </Dropzone>
    </div>
  );
}

FileUploader.propTypes = {
  currentFile: PropTypes.object,
  progress: PropTypes.number,
  onSubmit: PropTypes.func,
  onDrop: PropTypes.func,
};

FileUploader.defaultProps = {
  currentFile: undefined,
  progress: undefined,
  onSubmit: () => {},
  onDrop: () => {},
};

export default FileUploader;
