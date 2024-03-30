import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Modal.module.css';
import classNames from 'classnames';
import { Card } from '~/shared/ui/Card';
import { Portal } from '~/shared/ui/Portal';
import { Button } from '~/shared/ui/Button';
import { CrossSVG } from '~/shared/assets/CrossSVG.tsx';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

const ANIM_DELAY = 100;

export const Modal = (props: ModalProps) => {
  const { className = '', onClose, isOpen, children } = props;
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef: MutableRefObject<
    ReturnType<typeof setTimeout> | undefined
  > = useRef(undefined);

  const onOverlayClick = useCallback(() => {
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, ANIM_DELAY);
  }, [onClose]);

  const onContentClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    },
    [],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') onOverlayClick();
    },
    [onOverlayClick],
  );

  useEffect(() => {
    if (isOpen) {
      // @ts-expect-error ошибка реакта, видимо https://github.com/hibiken/react-places-autocomplete/issues/377
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      // @ts-expect-error ошибка реакта, видимо https://github.com/hibiken/react-places-autocomplete/issues/377
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(closeTimerRef.current);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, {
          [cls.open]: isOpen,
          [cls.closing]: isClosing,
        })}
      >
        <div className={cls.overlay} onClick={onOverlayClick}>
          <Card
            className={classNames(cls.content, className)}
            onClick={onContentClick}
          >
            {children}
            <Button
              onClick={onOverlayClick}
              className={cls.close_btn}
              buttonTheme={'link'}
            >
              <CrossSVG />
            </Button>
          </Card>
        </div>
      </div>
    </Portal>
  );
};
