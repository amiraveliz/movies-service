import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button';
import {
  StyledContainer,
  StyledLogoSection,
  StyledMenuSection,
} from './styles';
import { ReactComponent as Plus } from '../../assets/images/icons/plus.svg';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/icons/menu.svg';
import { ReactComponent as Bell } from '../../assets/images/icons/bell.svg';
import Profile from '../../assets/images/profile.svg';
import Modal from '../modal';
import FileUploader from '../file-uploader';
import { clearUploadError, uploadNewMovie } from '../../slices/movies';

function Header() {
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(undefined);
  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();

  const handleClearUploadValues = () => {
    setCurrentFile(undefined);
    setProgress(undefined);
    setFileName('');
  };

  const toggleShowAddMovieModal = () => {
    if (showAddMovieModal) {
      handleClearUploadValues();
      dispatch(clearUploadError());
    }
    setShowAddMovieModal(!showAddMovieModal);
  };

  const handleAddNewMyMovie = () => {
    dispatch(clearUploadError());
    setProgress(0);

    const onUploadProgress = (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    };

    dispatch(
      uploadNewMovie({
        file: currentFile,
        onUploadProgress,
        fileName,
      })
    ).finally(() => {
      handleClearUploadValues();
    });
  };

  const handleOnDropFile = (files) => {
    setCurrentFile(files[0]);
  };

  const handleChangeName = ({ target: { value } }) => {
    setFileName(value);
  };

  const handleCancelUpload = () => toggleShowAddMovieModal();

  return (
    <StyledContainer>
      <StyledLogoSection>
        <Logo />
        <Button
          text="agregar película"
          variant="transparent"
          icon={Plus}
          onClick={toggleShowAddMovieModal}
        />
      </StyledLogoSection>
      <StyledMenuSection>
        <Button variant="transparent" icon={Menu} />
        <Button variant="transparent" icon={Bell} />
        <img src={Profile} alt="Profile avatar" width="42" height="42" />
      </StyledMenuSection>
      <Modal
        visible={showAddMovieModal}
        title="agregar película"
        onHiding={toggleShowAddMovieModal}
      >
        <FileUploader
          currentFile={currentFile}
          progress={progress}
          fileName={fileName}
          onSubmit={handleAddNewMyMovie}
          onDrop={handleOnDropFile}
          onChangeFileName={handleChangeName}
          onCancel={handleCancelUpload}
        />
      </Modal>
    </StyledContainer>
  );
}

export default Header;
