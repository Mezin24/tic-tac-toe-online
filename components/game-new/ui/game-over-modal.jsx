import { UiModal } from "@/components/uikit/ui-modal";
import { UIButton } from "@/components/uikit/ui-button";

export const GameOverModal = ({ winnerName, players }) => {
  return (
    <UiModal
      isOpen={winnerName}
      width="md"
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-2">{players}</div>
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
