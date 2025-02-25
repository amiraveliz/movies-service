import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button';
import { StyledContainer, StyledLogoSection } from './styles';
import { ReactComponent as Plus } from '../../assets/images/icons/plus.svg';
import Modal from '../../components/modal';
import FileUploader from '../../components/file-uploader';
import { clearUploadError, uploadNewMovie } from '../../slices/movies';
import SidebarMenu from '../../components/sidebar-menu';
import Logo from '../../components/logo';

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
        title: fileName,
      })
    );
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
      <SidebarMenu onClickAddMovie={toggleShowAddMovieModal} />
      <Modal
        visible={showAddMovieModal}
        title="Agregar película"
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
