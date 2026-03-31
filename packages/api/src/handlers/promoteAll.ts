import { BullBoardRequest, ControllerHandlerReturnType } from '../../typings/app';
import { queueProvider } from '../providers/queue';
import { BaseAdapter } from '../queueAdapters/base';

async function promoteAll(
  _req: BullBoardRequest,
  queue: BaseAdapter
): Promise<ControllerHandlerReturnType> {
  if (!queue.allowPromoteAll) {
    return { status: 403, body: { error: 'Promote all is disabled for this queue' } };
  }

  await queue.promoteAll();

  return { status: 200, body: {} };
}

export const promoteAllHandler = queueProvider(promoteAll);
