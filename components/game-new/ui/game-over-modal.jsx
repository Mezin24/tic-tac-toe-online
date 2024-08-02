import { UiModal } from "@/components/uikit/ui-modal";
import { UIButton } from "@/components/uikit/ui-button";

export const GameOverModal = () => {
  return (
    <UiModal isOpen={false} onClose={() => console.log("close")}>
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">Mezin</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UIButton size="md" variant="outline">
          Вернуться
        </UIButton>
        <UIButton size="md" variant="primary">
          Играть снова
        </UIButton>
      </UiModal.Footer>
    </UiModal>
  );
};
