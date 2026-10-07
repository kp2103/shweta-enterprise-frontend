import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface Option {
  label: string;
  value: string;
  icon?: keyof typeof Ionicons.glyphMap;
  description?: string;
}

interface AuthDropdownProps {
  label: string;
  value: string;
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

export function AuthDropdown({
  label,
  value,
  options,
  onSelect,
  placeholder = 'Select an option',
}: AuthDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {/* Trigger */}
      <TouchableOpacity style={styles.inputContainer} onPress={() => setOpen(true)} activeOpacity={0.7}>
        <View style={styles.triggerLeft}>
          {selected?.icon && (
            <Ionicons name={selected.icon} size={20} color="#9CA3AF" style={styles.triggerIcon} />
          )}
          <Text style={[styles.value, !selected && styles.placeholder]}>
            {selected ? selected.label : placeholder}
          </Text>
        </View>
        <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Modal picker */}
      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        <View style={styles.sheet}>
          <View style={styles.sheetHandle} />
          <Text style={styles.sheetTitle}>{label}</Text>

          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <TouchableOpacity
                key={opt.value}
                style={[styles.option, isSelected && styles.optionSelected]}
                onPress={() => {
                  onSelect(opt.value);
                  setOpen(false);
                }}
                activeOpacity={0.7}
              >
                <View style={styles.optionLeft}>
                  {opt.icon && (
                    <View style={[styles.optionIconBg, isSelected && styles.optionIconBgSelected]}>
                      <Ionicons
                        name={opt.icon}
                        size={20}
                        color={isSelected ? '#1D4ED8' : '#6B7280'}
                      />
                    </View>
                  )}
                  <View>
                    <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                      {opt.label}
                    </Text>
                    {opt.description && (
                      <Text style={styles.optionDescription}>{opt.description}</Text>
                    )}
                  </View>
                </View>
                {isSelected && <Ionicons name="checkmark-circle" size={22} color="#1D4ED8" />}
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 6,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    height: 50,
    paddingHorizontal: 12,
  },
  triggerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  triggerIcon: {
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: '#1F2937',
  },
  placeholder: {
    color: '#9CA3AF',
  },
  // Modal
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: 36,
    paddingTop: 12,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#F9FAFB',
  },
  optionSelected: {
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  optionIconBg: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionIconBgSelected: {
    backgroundColor: '#DBEAFE',
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },
  optionLabelSelected: {
    color: '#1D4ED8',
  },
  optionDescription: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
});
